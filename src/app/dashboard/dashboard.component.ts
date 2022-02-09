import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
         
    }
    ngOnInit(): void {
         
    }
    valorURLPDF: string;
    limpiarPDF(){
        console.log('limpiar pdf');

        this.valorURLPDF = '';
        setTimeout( () => this.valorURLPDF = "/assets/base.pdf", 10)
    }
}