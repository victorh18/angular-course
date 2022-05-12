import { Directive, ElementRef, Inject, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    element: HTMLElement;

    constructor(@Inject(JQ_TOKEN) private $: any, private ref: ElementRef) {
        this.element = ref.nativeElement;
    }
    ngOnInit(): void {
        this.element.addEventListener('click', () => {
            this.$('#simple-modal').modal({});
        })
    }
}