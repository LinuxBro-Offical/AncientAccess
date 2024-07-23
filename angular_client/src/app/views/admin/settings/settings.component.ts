import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService,) {}

  selectedFiles = [];
  

  ngOnInit(): void {
    this.admin.getHeritages().subscribe(
      (response:any) => {
        console.log(response)
        this.heritageData = response
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onFileSelected(files: FileList): void {
    // Convert the FileList object to an array
    // console.log(files)
    this.selectedFiles = Array.from(files).map(item=>item);
    console.log(this.selectedFiles)
  }

  
  onVideoSelected(file: File): void {
    // Convert the FileList object to an array
    console.log(file)
    this.selectedFiles.push(file[0]);
  }

  // Create new heritage 
  onCreate(data)
  {
    console.log(data)

    const formData = new FormData();

    console.log(this.selectedFiles)
    // Adding images to form data 
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    }
 
    console.log(formData.get("files"))

    // Adding fields to form data 
    Object.keys(data).forEach(key => {
      const value = data[key];
      formData.append(key, value);
    });

    this.admin.createHeritages(formData).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
            this.showModal = !this.showModal;
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }

  deleteHeritage(id:number){
    this.admin.deleteHeritages(id).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onEdit(user, data){
    const keys =Object.keys(data).filter(key => data[key] !== '')
    for(const item in user){
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == item){
          user[item] = data[key]
        }
      }
    }
    this.admin.updateHeritage(user._id, user).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
            this.showEditModal = !this.showEditModal;
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
    console.log(user)
  }

  heritageData ={}
  showModal = false;
  showEditModal = false
  slectedHeritage = {}

  toggleEditModal(heritage: object){
    this.slectedHeritage = heritage
    this.showEditModal = !this.showEditModal;
  }

  toggleModal(){
    console.log(this.showModal)
    this.showModal = !this.showModal;
  }
}
