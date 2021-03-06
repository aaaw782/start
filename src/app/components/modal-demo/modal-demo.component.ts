import { Component} from '@angular/core';
@Component({
    selector: 'modal-demo',
    templateUrl: './modal-demo.component.html',
    styleUrls: ['./modal-demo.component.less'],
})
export class ModalDemoComponent {
  isShowModal:boolean=false;
  modalSize:string='md';
  tabIndex:number=1;
  constructor(){
  }
  changTab(index:number){
    this.tabIndex=index;
  }
  closeModal(){
    this.isShowModal=false;
  }
  showModal(size?:string){
    console.log(size);
    this.modalSize=size||'';
    this.isShowModal=true;
  }
}
