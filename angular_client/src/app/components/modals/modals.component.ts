import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-modals',
  template: `<div *ngIf="showModal" style="top:2rem;left: 50%;" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
  <div class="relative w-auto my-6 mx-auto max-w-sm">
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 class="text-xl font-semibold" style="color: black;">
          Edit User
        </h3>
        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" (click)="toggleModal()">
          <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-6 flex-col" style="padding: 1rem 2rem;">
        {{userId}}
        {{showModal}}
        <label for="name" class="text-black">Full Name :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
        <label for="name" class="text-black">User Name :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
        <label for="name" class="text-black">Password :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
        <label for="name" class="text-black">Age :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
        <label for="name" class="text-black">Type :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
        <label for="name" class="text-black">Points :</label>
        <div class="mb-3 pt-1">
          <input type="text" placeholder="Small Input" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b" style="padding: 1rem;">
        <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Close
        </button>
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div *ngIf="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>`
})
export class ModalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() userId: number;
  @Input() showModal: boolean;

}
