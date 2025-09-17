// ====== Configurações iniciais do Supabase ======
const SUPABASE_URL = "https://bchduoxlgwnhpganntpd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjaGR1b3hsZ3duaHBnYW5udHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2ODk5NjYsImV4cCI6MjA3MzI2NTk2Nn0.1ePX1jlxIEENZQnp7rCDXmqJblBO0IXWdOuvte9tOQY";

// Criação do client Supabase com a biblioteca global importada no HTML
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Variáveis de controle
let usuarioAtual = null; // Armazena o usuário logado
let carrinho = [];       // Lista de produtos no carrinho
let produtos = [];       // Produtos carregados do banco

// ========== AUTENTICAÇÃO ==========

// Cadastrar novo usuário
async function cadastrar(email, senha) {
  const { data, error } = await supabase.auth.signUp({ email, password: senha });
  if (error) {
    alert("Erro ao cadastrar: " + error.message);
    return;
  }
  alert("Cadastro realizado! Agora faça login.");
}

// Login do usuário
async function login(email, senha) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
  if (error) {
    alert("Erro ao logar: " + error.message);
    return;
  }

  usuarioAtual = data.user;
  alert("Login realizado com sucesso!");

  document.getElementById("menu").style.display = "block";
  document.getElementById("login").style.display = "none";

  mostrarPagina("produtos");
  carregarCategorias();
  carregarProdutos();
}

// Logout (sair da conta)
function logout() {
  usuarioAtual = null;
  document.getElementById("menu").style.display = "none";
  document.getElementById("login").style.display = "block";
  mostrarPagina("login");
  carrinho = [];
  atualizarCarrinho();
}

// ========== CATEGORIAS ==========

async function carregarCategorias() {
  const { data, error } = await supabase.from("categorias").select("*");
  const lista = document.getElementById("lista-categorias");
  lista.innerHTML = "";

  if (error) {
    lista.innerHTML = "<p>Erro ao carregar categorias.</p>";
    return;
  }

  data.forEach(cat => {
    const div = document.createElement("div");
    div.classList.add("categoria");
    div.innerHTML = `
      <img src="${cat.imagem}" alt="${cat.nome}" width="100">
      <h3 onclick="filtrarProdutosPorCategoria(${cat.id})" style="cursor:pointer; color:blue;">${cat.nome}</h3>
    `;
    lista.appendChild(div);
  });
}

// ========== PRODUTOS ==========

async function carregarProdutos() {
  const { data, error } = await supabase.from("produtos").select("*, categorias(nome)");
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";

  if (error) {
    lista.innerHTML = "<p>Erro ao carregar produtos.</p>";
    return;
  }

  produtos = data;

  data.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" width="150">
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <strong>R$ ${p.preco.toFixed(2)}</strong><br>
      <button onclick="adicionarCarrinho(${i})">Adicionar ao Carrinho</button>
    `;
    lista.appendChild(div);
  });
}

function filtrarProdutosPorCategoria(idCategoria) {
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";
  const filtrados = produtos.filter(p => p.categoria_id === idCategoria);

  if (filtrados.length === 0) {
    lista.innerHTML = "<p>Nenhum produto encontrado para esta categoria.</p>";
    return;
  }

  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" width="150">
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <strong>R$ ${p.preco.toFixed(2)}</strong><br>
      <button onclick="adicionarCarrinho(${produtos.indexOf(p)})">Adicionar ao Carrinho</button>
    `;
    lista.appendChild(div);
  });

  mostrarPagina("produtos");
}

// ========== CARRINHO ==========

function adicionarCarrinho(i) {
  const existente = carrinho.find(item => item.id === produtos[i].id);
  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ ...produtos[i], quantidade: 1 });
  }
  atualizarCarrinho();
  alert(`${produtos[i].nome} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = <strong>R$ ${subtotal.toFixed(2)}</strong>
      <button onclick="removerCarrinho(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

async function finalizarCompra() {
  if (!usuarioAtual) {
    alert("Você precisa estar logado para finalizar a compra!");
    return;
  }
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  const pedidos = carrinho.map(item => ({
    user_id: usuarioAtual.id,
    produto_id: item.id,
    quantidade: item.quantidade
  }));

  const { error } = await supabase.from("pedidos").insert(pedidos);
  if (error) {
    alert("Erro ao salvar pedido: " + error.message);
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho = [];
  atualizarCarrinho();
}

// ========== PÁGINA ==========
function mostrarPagina(id) {
  document.querySelectorAll(".pagina").forEach(p => p.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}
