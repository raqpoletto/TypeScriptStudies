"use strict";
/* async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
  <div>
  <h2>${data.nome}<h2>
  <p>R$ ${data.preco}</p>
  <div>
  <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
  </div>
  <div>
  <h3>Montadora: ${data.empresaMontadora.nome}</h3>
  </div>
  </div>
  `;
} */
/* fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }
    document.body.innerHTML += `
  <div>
  <h2 style='color: ${color}'>${curso.nome}</h2>
  <p>Horas: ${curso.horas}</p>
  <p>Aulas: ${curso.aulas}</p>
  <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
  <p>Tags: ${curso.tags.join(", ")}</p>
  <p>Aulas: ${curso.idAulas.join(" | ")}</p>
  </div>
  `;
  });
}
 */
/* const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
} */
/*
const links = document.querySelectorAll(".link");

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
});

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "purple";
  elemento.style.border = "2px solid purple";
} */
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    const button = event.currentTarget;
    const nav = document.getElementById("nav");
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
btnMobile?.addEventListener("pointerdown", toggleMenu);
