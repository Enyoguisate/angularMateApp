import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Member, MembersProvider } from '../../providers/members/members';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {

  memberForm: FormGroup;
  member: Member={name: undefined, photo:undefined, description: undefined, wonCount: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public memberProvider: MembersProvider,
    public camera: Camera) {

    this.memberForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    })


  }

  takePicture(){
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.member.photo = base64Image;

    }, (err) => {
      alert(err);
    });
  }

  addMember(){
    this.memberProvider.addMember(this.member).then(()=>{
      this.close();
    });
  }
  ionViewDidLoad() {
  }
  close(){
    this.navCtrl.pop();
  }

}
