import { Component } from '@angular/core';



@Component({
  selector: 'lrw-historic-widget',
  templateUrl: './lrw-historic-widget.component.html',
  styleUrls: ['./lrw-historic-widget.component.css']
})
export class LrwHistoricWidgetComponent {

  
  public version = '0.0.4'
  public view = 'Vistas';
  public download = 'Descargas'
  public outlink = 'Enalces'
  public L = 'La Referencia'
  public N = 'Nodo Nacional'
  public R = 'Nodo regional'
  public country = 'Argentina'
  public national_source = ''
  public repository_source = 'SITEID::59'
  public preview = false 

  ngOnInit(): void {
    this.setWidgetData();
  }


  setWidgetData(){
    (<any>window)['lrhw'] = {
      //identifier: ´´,
      //identifier_meta_field: 'eprints.eprintid',
      //identifier_prefix: '',
      //identifier_regex: '',
      event_labels: {
        view: this.view,
        download: this.download,
        outlink: this.outlink
      },
      scope_labels: {
        L: this.L,
        N: this.N,
        R: this.R
      },
      country: this.country,
      national_source: this.national_source,
      repository_source: this.repository_source,
      preview: this.preview
    };

    const widget = document.createElement('script');
    widget.src = ` https://cdn.jsdelivr.net/gh/lareferencia/lrhw@${this.version}/dist/historic-widget.js` ;

    const container = document.getElementById('lareferencia-repository-widget');
    if (container) {
      container.appendChild(widget);
    }
  }

}
