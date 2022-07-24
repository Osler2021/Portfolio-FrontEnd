import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;
  public deleteExperiencia!: Experiencia | undefined;

  roles: string[] = [];
  isAdmin = false;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getExperiencias();
   // this.roles = this.tokenService.getAuthorities();
   // this.roles.forEach((role) => {
   //  if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
   //   }
   // });
  }

  public getExperiencias(): void {
    this.experienciaService.getExperiencias().subscribe(
      (response: Experiencia[]) => {
        this.experiencias = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddExperiencia(addForm: NgForm): void {
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateExperiencia(experiencia: Experiencia): void {
    this.experienciaService.updateExperiencia(experiencia).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteExperiencia(experienciaId: number): void {
    this.experienciaService.deleteExperiencia(experienciaId).subscribe(
      (response: void) => {
        console.log(response);
        this.getExperiencias();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(mode: String, experiencia?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#updateExperienciaModal');
    }
    if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    }
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
}