class DWS_hamb2 extends HTMLElement{
    // version: 1.0.0
    constructor(){
        super();
        this.grosor;  
        this.color;
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes(){
        return ['color','grosor'];
    }    
    attributeChangedCallback(nameAtr, oldValue, newValue){    
        switch (nameAtr) {
            case "color":
                this.color = newValue;
                break;   
            case "grosor":
                this.grosor = newValue;
                break; 
        }
            
    }
    connectedCallback(){
        
        let hamb = `
        <style>        
        .dp-btn-hamb2{
            position: relative;
            width: 40px;
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            cursor: pointer;  
        }
        .dp-btn-hamb2-div::after, .dp-btn-hamb2-div::before,.dp-btn-hamb2-div{
            position: absolute;
            width: 100%;
            height: ${this.grosor}; 
            background: ${this.color};
            content: '';
            transition: 0.6s;
        }
        .dp-btn-hamb2-div::after{
            top: 10px;
            height: 100%;
        }
        .dp-btn-hamb2-div::before{
            top: -10px;
            height: 100%;
        }
        .dp-btn-close1{
            transition: 0.6s;
            transform: rotateZ(45deg);
        }
          .dp-btn-close1::before{
            transition: 0.6s;
            top: 0px;
            transform: rotateZ(90deg);
        }
          .dp-btn-close1::after{
            transition: 0.6s;
            top: 0px;
            transform: rotateZ(0deg);
        }
        </style>
        <div class="dp-btn-hamb2" id="dp_btn_hamb2">
            <div class="dp-btn-hamb2-div"></div>
        </div>        
        `;
        
       this.shadowRoot.innerHTML = hamb;
       this.shadowRoot.getElementById("dp_btn_hamb2").onclick = () => this.cambia();
    }

   cambia(){
    this.shadowRoot.querySelector('#dp_btn_hamb2>div').classList.toggle("dp-btn-close1");   
   }
    
}
window.customElements.define("dws-hamb2", DWS_hamb2);