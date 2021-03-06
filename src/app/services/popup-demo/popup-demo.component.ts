import { Component} from '@angular/core';
import { PopupService} from 'dolphinng';
@Component({
    selector: 'popup-demo',
    templateUrl: './popup-demo.component.html',
    styleUrls: ['./popup-demo.component.less'],
    providers:[PopupService]
})
export class PopupDemoComponent {

  tabIndex:number=0;
  constructor(private popup:PopupService){
  }
  changTab(index:number){
    this.tabIndex=index;
  }
  info(){
    this.popup.info({
      title:'系统提示',
      text:'这是一个消息提示！',
      textAlign:'center'
    });
  }
  confirm(){
    this.popup.confirm({
      title:'操作确认',
      text:'确定要这么做吗？'
    }).onConfirm(()=>{
      alert('你选择了确定按钮');
    }).onCancel(()=>{
      alert('你选择了取消按钮');
    }).onClose(()=>{
      alert('你选择了关闭');
    });
  }
  error(){
    this.popup.error({
      title:'错误提示',
      text:'对象未定义'
    })
  }
  loader(){
    this.popup.confirm({
      title:'操作确认',
      text:'确定要这么做吗？',
      closeOnConfirm:false,
      showLoaderOnConfirm:true,
      confirmLoaderText:'正在提交'
    })
  }
}
