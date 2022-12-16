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

/* const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById("nav");

  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}

btnMobile?.addEventListener("pointerdown", toggleMenu); */

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

/* function arredondado(valor: number): number;
function arredondado(valor: string): string;
function arredondado(valor: number | string): number | string {
  if (typeof valor === "number") {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}

console.log(arredondado(200.32));
console.log(arredondado("200.32")); */

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

/* async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

function isCurso(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === "object" &&
    "nome" in curso &&
    "horas" in curso &&
    "tags" in curso
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(", ")}</p>
        </div>
      `;
    });
  }
} */

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === "object" &&
    ("nome" in obj || "email" in obj || "cpf" in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem("UserData");
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem("UserData", JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLFormElement>("#form");

form?.addEventListener("keyup", handleInput);
