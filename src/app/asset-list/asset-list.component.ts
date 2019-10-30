import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDet } from '../assetdet';
import { AssetdetService } from '../assetdet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assetdets:Observable<AssetDet[]>

  constructor(private assetdetservice:AssetdetService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.assetdets = this.assetdetservice.getAssetDetsList();

  }
  deleteAssetDet(adId: number,assetdet:AssetDet){
    this.assetdetservice.deleteAssetDet(adId,assetdet)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  AssetDetails(adId: number){
    console.log(adId);
    this.router.navigate(['details',adId]);
  }

  updateAssetDet(id: number){
    console.log(id);
    this.router.navigate(['update',id]);
  }

}
