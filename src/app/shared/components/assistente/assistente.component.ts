import { UserInformation } from './../../../domain/interfaces/user-information';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HOME_MESSAGE } from '../../constants';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-assistente',
  templateUrl: './assistente.component.html',
  styleUrls: ['./assistente.component.scss'],
})
export class AssistenteComponent implements OnInit {
  public showMelia = false;
  public mensagem: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.mensagem = `Vi ${HOME_MESSAGE}`;
    this.observarMudancaUserInformation();
  }

  private observarMudancaUserInformation(): void {
    this.authService.eventChangeUserInformation.subscribe((userInformation) => {
      this.mensagem = `${userInformation.first_name}, ${HOME_MESSAGE}`;
    });
  }

  public handleShowMelia(): void {
    this.showMelia = true;
  }

  public handleExistClick(): void {
    this.showMelia = false;
  }
}
