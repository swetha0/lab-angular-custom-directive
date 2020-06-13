import { Directive, ElementRef,HostListener, Input } from '@angular/core';  
  
@Directive({  
    selector: '[colorchange]'  
})  
export class ColorChangeDirective {  
    private _defaulColor = 'red';  
    @Input('colorchange') highlightColor: string;  
  
    constructor(private el: ElementRef) {  
    }  
  
    @HostListener('mouseenter') onMouseEnter() {  
        console.log(this.highlightColor);  
        this.changecolor(this.highlightColor || this._defaulColor);  
    }  
  
    @HostListener('mouseleave') onMouseLeave() {  
        console.log(this.highlightColor);  
        this.changecolor(null);  
    }  
  
    private changecolor(color: string) {  
        this.el.nativeElement.style.backgroundColor = color;  
    }  
}  