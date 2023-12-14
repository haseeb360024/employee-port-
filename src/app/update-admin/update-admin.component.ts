import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit{
  
  profileImage:string ="./assets/images/User-icon.png.png"
  editAdminStatus:boolean = false
  adminDetails:any ={}
  constructor(private api:AdminApiService){}
  ngOnInit(): void {
    //getadmin details
    this.api.authenticate().subscribe((res:any)=>{
      this.adminDetails = res
      if(res.picture){
        this.profileImage = res.picture
      }
    })
  }


  editAdminBtnClicked(){
    this.editAdminStatus = true 
  }
  getFile(event:any){
    let file = event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event:any)=>{
      console.log(event.target.result);
      this.profileImage = event.target.result
      this.adminDetails.picture=this.profileImage
      
    }
  }
}
