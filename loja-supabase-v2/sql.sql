-- PERFIS
create table if not exists perfis (
  id uuid references auth.users(id) primary key,
  role text check (role in ('admin','cliente')) default 'cliente'
);

-- CATEGORIAS
create table if not exists categorias (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  imagem text
);

-- PRODUTOS
create table if not exists produtos (
  id uuid default gen_random_uuid() primary key,
  categoria_id uuid references categorias(id),
  nome text not null,
  preco numeric(10,2) not null,
  imagem text,
  descricao text
);

-- PEDIDOS
create table if not exists pedidos (
  id uuid default gen_random_uuid() primary key,
  usuario_id uuid references auth.users(id) on delete cascade,
  produto_id uuid references produtos(id) on delete cascade,
  quantidade int not null,
  data timestamp default now()
);

-- INSERIR CATEGORIAS
insert into categorias (nome, imagem) values 
('Notebooks', 'https://m.media-amazon.com/images/I/71mEs6vUR+L._AC_SL1500_.jpg'), 
('PCs Gamers', 'https://m.media-amazon.com/images/I/81lQwMyQJtL._AC_SL1500_.jpg'), 
('Periféricos', 'https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg')
on conflict do nothing;

-- INSERIR PRODUTOS
insert into produtos (categoria_id, nome, preco, imagem, descricao)
select id, 'Notebook Dell Inspiron i5', 2899.99, 'https://m.media-amazon.com/images/I/71mEs6vUR+L._AC_SL1500_.jpg', 'Notebook Dell com 8GB RAM e SSD 256GB'
from categorias where nome = 'Notebooks'
union all
select id, 'PC Gamer Ryzen 5 + RTX 3060', 5999.99, 'https://m.media-amazon.com/images/I/81lQwMyQJtL._AC_SL1500_.jpg', 'PC gamer com Ryzen 5, 16GB RAM e RTX 3060'
from categorias where nome = 'PCs Gamers'
union all
select id, 'Teclado Mecânico Redragon Kumara', 249.99, 'https://m.media-amazon.com/images/I/71Wb1xQWYlL._AC_SL1500_.jpg', 'Teclado mecânico ABNT2 com switches Outemu Blue'
from categorias where nome = 'Periféricos';