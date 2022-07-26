import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Sobremi } from '../../model/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  public sobremis: Sobremi[] = [];
  public editSobremi!: Sobremi;

  roles: string[] = [];
  isAdmin = false;

  constructor(
    private sobremiService: SobremiService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getSobremis();
    //this.roles = this.tokenService.getAuthorities();
    //this.roles.forEach((role) => {
    // if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
    //  }
    //});
  }

  public getSobremis(): void {
    this.sobremiService.getSobremis().subscribe(
      (response: Sobremi[]) => {
        this.sobremis = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateSobremi(sobremi: Sobremi): void {
    this.sobremiService.updateSobremi(sobremi).subscribe(
      (response: Sobremi) => {
        console.log(response);
        this.getSobremis();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(sobremi: Sobremi, mode: String): void {
    const container = document.getElementById('main-container1');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editSobremi = sobremi;
      button.setAttribute('data-target', '#updateSobremiModal');
    }
    container?.appendChild(button);
    button.click();
  }
}