const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#main-nav');
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>8);updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#inquiry-form').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.checkValidity()){form.reportValidity();return;}form.querySelectorAll('.field,.checkbox,button').forEach(node=>node.hidden=true);form.querySelector('.form-success').hidden=false;});
