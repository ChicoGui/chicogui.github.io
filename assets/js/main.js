document.getElementById("ano").textContent = new Date().getFullYear();

/* ====== Navegação ===== */

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const toggler = document.querySelector('.navbar-toggler');

  


  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Só fecha se o menu estiver aberto no mobile
      if (window.getComputedStyle(toggler).display !== 'none') {
        const bsCollapse =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, { toggle: false });

        bsCollapse.hide();
      }
    });
  });
});

/* ===== Áreas ===== */
const areas = [
  { icon: 'kanban', title: 'Product Designer', text: 'Visão de produto, estratégia e entrega ponta a ponta.' },
  { icon: 'diagram-3', title: 'UX Designer', text: 'Pesquisa, fluxos e validação com usuários.' },
  { icon: 'palette2', title: 'UI Designer', text: 'Interfaces acessíveis e design systems.' },
  { icon: 'code-slash', title: 'Desenvolvedor Web', text: 'Código limpo, performance e acessibilidade.' }
];

document.getElementById('cardsAreas').innerHTML = areas.map(area => `
  <article class="col">
    <div class="card h-100 p-4 shadow card-hover border-0 bg-white">

      <div class="card-header-inline mb-3">
        <div class="icon-circle text-dark">
          <i class="bi bi-${area.icon} fs-5" aria-hidden="true"></i>
        </div>

        <h3 class="h5 fw-bold text-dark mb-0">
          ${area.title}
        </h3>
      </div>

      <p class="text-muted mb-0">
        ${area.text}
      </p>

    </div>
  </article>
`).join('');


/* ===== Serviços (com conteúdo das modais) ===== */
const servicos = [
  {
    id: "caseInstitucional",
    icon: "globe",
    title: "Sites Institucionais",
    image: "img/businespage.png",
    text: "Posicione sua marca com um site profissional, moderno e preparado para gerar oportunidades.",
    modal: {
      title: "Sites Institucionais — Presença digital com propósito",
      conteudo: `
        <p>Seu site é um dos principais pontos de contato entre sua empresa e seu público. Mais do que apresentar informações, ele precisa comunicar a identidade da marca, transmitir confiança e facilitar o relacionamento com seus clientes.</p>

        <p>Planejo e desenvolvo sites institucionais que combinam estratégia, design e tecnologia. Cada projeto é pensado para apresentar seu negócio com clareza, oferecer uma boa experiência de navegação e funcionar bem em diferentes dispositivos.</p>

        <h3>O que pode fazer parte do projeto:</h3>
        <ul>
          <li>Design alinhado à identidade visual da empresa.</li>
          <li>Arquitetura da informação e navegação intuitiva.</li>
          <li>Layout responsivo para celulares, tablets e desktops.</li>
          <li>Estrutura semântica e boas práticas de SEO.</li>
          <li>Otimização de desempenho e acessibilidade.</li>
          <li>Integração com formulários e ferramentas externas.</li>
        </ul>

        <div class="mt-3">
          <a href="#contato" class="btn btn-site btn-site-primary modal-contact-cta">Vamos criar seu site?</a>
        </div>
      `
    }
  },

  {
    id: "caseEcommerce",
    icon: "cart-check",
    title: "E-commerces",
    image: "img/ecommerce.png",
    text: "Lojas virtuais otimizadas para conversão.",
    modal: {
      title: "E-commerce — Experiências digitais para vender melhor",
      conteudo: `
        <p>Uma loja virtual precisa oferecer mais do que um catálogo de produtos. A experiência de compra deve ser simples, intuitiva e transmitir segurança em todas as etapas, desde a descoberta de um produto até a finalização do pedido.</p>

        <p>Desenvolvo experiências de comércio eletrônico que aproximam estratégia de negócio e experiência do usuário. A estrutura da loja é planejada para facilitar a navegação, organizar produtos e tornar o processo de compra mais eficiente.</p>

        <h3>O que pode fazer parte do projeto:</h3>
        <ul>
          <li>Interface personalizada e responsiva.</li>
          <li>Organização de categorias e catálogo de produtos.</li>
          <li>Busca e filtros para facilitar a navegação.</li>
          <li>Carrinho e fluxo de finalização de compra.</li>
          <li>Integrações com meios de pagamento e logística.</li>
          <li>Estrutura de gestão e acompanhamento de pedidos.</li>
          <li>Otimização de desempenho e SEO.</li>
        </ul>

        <div class="mt-3">
          <a href="#contato" class="btn btn-site btn-site-primary modal-contact-cta">Vamos estruturar sua loja?</a>
        </div>
      `
    }
  },

  {
    id: "caseEducacional",
    icon: "mortarboard",
    title: "Plataformas Educacionais",
    image: "img/ava.png",
    text: "Ambientes de aprendizagem acessíveis.",
    modal: {
      title: "Plataformas Educacionais — Tecnologia para aprender e ensinar",
      conteudo: `
        <p>A tecnologia amplia as possibilidades de ensinar e aprender. Para isso, uma plataforma educacional precisa organizar conteúdos, facilitar a comunicação e proporcionar uma experiência acessível para diferentes perfis de usuários.</p>

        <p>Planejo e desenvolvo ambientes virtuais de aprendizagem (AVA) e experiências educacionais digitais, considerando as necessidades de estudantes, professores e administradores. O foco está na organização da informação, na usabilidade e na acessibilidade durante toda a jornada de aprendizagem.</p>

        <h3>O que pode fazer parte do projeto:</h3>
        <ul>
          <li>Interfaces intuitivas e acessíveis.</li>
          <li>Organização de cursos, módulos e conteúdos.</li>
          <li>Ambientes para estudantes e professores.</li>
          <li>Recursos de atividades e avaliações.</li>
          <li>Acompanhamento do progresso dos estudantes.</li>
          <li>Compatibilidade com diferentes dispositivos.</li>
          <li>Aplicação de boas práticas de acessibilidade, incluindo WCAG.</li>
        </ul>

        <div class="mt-3">
          <a href="#contato" class="btn btn-site btn-site-primary modal-contact-cta">Vamos desenvolver sua plataforma?</a>
        </div>
      `
    }
  },

  {
    id: "caseSistemas",
    icon: "calendar-check",
    title: "Sistemas Sob Medida",
    image: "img/dashboard.png",
    text: "Automatize processos e ganhe eficiência.",
    modal: {
      title: "Sistemas Sob Medida — Soluções para desafios reais",
      conteudo: `
        <p>Cada negócio possui processos, necessidades e desafios próprios. Quando ferramentas prontas não atendem a essas particularidades, uma solução personalizada pode tornar as operações mais organizadas, eficientes e integradas.</p>

        <p>Desenvolvo sistemas web personalizados a partir do entendimento dos processos e das necessidades de cada projeto. Da arquitetura da informação à implementação, busco construir soluções que simplifiquem tarefas, organizem dados e apoiem a tomada de decisões.</p>

        <h3>O que pode fazer parte do projeto:</h3>
        <ul>
          <li>Levantamento e mapeamento de processos.</li>
          <li>Dashboards e painéis administrativos.</li>
          <li>Automação de tarefas e fluxos de trabalho.</li>
          <li>Gestão de usuários e permissões.</li>
          <li>Integração com APIs e serviços externos.</li>
          <li>Relatórios e visualização de dados.</li>
          <li>Interfaces responsivas e escaláveis.</li>
        </ul>

        <div class="mt-3">
          <a href="#contato" class="btn btn-site btn-site-primary modal-contact-cta">Vamos construir sua solução?</a>
        </div>
      `
    }
  }
];


/* ===== Renderiza os cards ===== */
document.getElementById("cardsServicos").innerHTML = servicos.map(item => `
  <article class="col">
    <div class="card h-100 shadow card-hover border-0 bg-white">
      <img src="assets/${item.image}" class="card-img-top" alt="" loading="lazy" decoding="async" width="640" height="400">
      
      <div class="card-body">
        <div class="card-header-inline mb-3">
          <h3 class="h5 fw-bold text-dark mb-0">${item.title}</h3>
        </div>  
      
        <p class="text-muted">${item.text}</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-site btn-site-secondary w-100"
          data-bs-toggle="modal"
          data-bs-target="#${item.id}">
          Saiba mais
        </button>
      </div>
    </div>

  </article>
`).join("");

/* ===== Renderiza as modais dinamicamente ===== */
document.getElementById("modaisServicos").innerHTML = servicos.map(item => `
  <div class="modal fade"
       id="${item.id}"
       tabindex="-1"
       aria-labelledby="${item.id}-title"
       aria-hidden="true">

    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header">
          <h2 class="modal-title" id="${item.id}-title">
            ${item.modal.title}
          </h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar janela"></button>
        </div>

        <div class="modal-body">
          
          ${item.modal.conteudo}
          
          <div class="modal-navigation d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-site btn-site-secondary prev-btn" aria-label="Ver serviço anterior">← Anterior</button>
            <button type="button" class="btn btn-site btn-site-primary next-btn" aria-label="Ver próximo serviço">Próximo →</button>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-site btn-site-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>

      </div>
    </div>
  </div>
`).join("");

const modais = document.querySelectorAll('.modal');

modais.forEach((modalEl, index) => {
  const prevBtn = modalEl.querySelector('.prev-btn');
  const nextBtn = modalEl.querySelector('.next-btn');

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === servicos.length - 1;

  // Aguarda o encerramento da transição antes de abrir a próxima modal.
  const navigateToModal = (targetIndex) => {
    const targetModal = document.getElementById(servicos[targetIndex].id);
    const currentModal = bootstrap.Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener('hidden.bs.modal', () => {
      bootstrap.Modal.getOrCreateInstance(targetModal).show();
    }, { once: true });

    currentModal.hide();
  };

  prevBtn.addEventListener('click', () => {
    if (index > 0) navigateToModal(index - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (index < servicos.length - 1) navigateToModal(index + 1);
  });

  // Qualquer CTA da modal fecha a janela e leva ao formulário de contato.
  modalEl.addEventListener('click', (event) => {
    const contactCta = event.target.closest('.modal-contact-cta');
    if (!contactCta) return;

    event.preventDefault();

    modalEl.addEventListener('hidden.bs.modal', () => {
      const contactSection = document.getElementById('contato');
      const firstField = document.getElementById('nome');

      if (!contactSection) {
        window.location.hash = 'contato';
        return;
      }

      // Atualiza a URL sem provocar uma rolagem abrupta.
      window.history.replaceState(null, '', '#contato');
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      firstField?.focus({ preventScroll: true });
    }, { once: true });

    bootstrap.Modal.getOrCreateInstance(modalEl).hide();
  });
});


/* ===== form ===== */

(() => {
  const form = document.getElementById('formContato');
  const successMessage = document.getElementById('formSuccess');
  const errorMessage = document.getElementById('formError');
  const formEndpoint = 'https://formspree.io/f/mdkdojqa';
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    form.classList.add('was-validated');
    errorMessage.classList.add('d-none');
    successMessage.classList.add('d-none');
    if (!form.checkValidity()) return;

    const formData = new FormData(form);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successMessage.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
      } else {
        const data = await response.json();
        errorMessage.textContent = data.errors?.[0]?.message || 'Falha ao enviar mensagem. Tente novamente.';
        errorMessage.classList.remove('d-none');
      }

    } catch (error) {
      errorMessage.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
      errorMessage.classList.remove('d-none');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar';
    }
  });
})();

Inputmask({
  mask: ["(99) 9999-9999", "(99) 99999-9999"],
  keepStatic: true
}).mask("#tel");
