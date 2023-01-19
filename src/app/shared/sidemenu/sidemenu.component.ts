import { Component } from '@angular/core';


interface MenuItem {
  texto: string;
  routes: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent {
menu: MenuItem[] = [
  {
    texto: 'Básico',
    routes:'template/basicos'
  },
  {
    texto: 'Dinámico',
    routes:'template/dinamicos'
  },
  {
    texto: 'Switches',
    routes:'template/switches'
  },
];

  reactive: MenuItem[] = [
    {
      texto: 'Básico',
      routes:'reactive/basicos'
    },
    {
      texto: 'Dinámico',
      routes:'reactive/dinamicos'
    },
    {
      texto: 'Switches',
      routes:'reactive/switches'
    },
  ];

  auth: MenuItem[] = [
    {
      texto: 'login',
      routes:'auth/login'
    },
    {
      texto: 'registro',
      routes:'auth/registro'
    }
  ];

}

