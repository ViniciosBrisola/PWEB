function abrirCurso() {
    const select = document.getElementById('cursos');
    const cursoSelecionado = select.value;

    if (cursoSelecionado) {
        const confirmar = confirm(`Você realmente deseja abrir a janela com informações sobre ${cursoSelecionado}?`);
        if (confirmar) {
            let conteudoCurso;
            switch (cursoSelecionado) {
                case 'Fabricação Mecânica':
                    conteudoCurso = `
                        <h1>Fabricação Mecânica</h1>
                        <p>O curso de Fabricação Mecânica forma profissionais capazes de atuar em processos de fabricação, 
                        como usinagem, soldagem, conformação e montagem de produtos. O curso também abrange o controle de qualidade 
                        e a gestão de processos produtivos.</p>
                    `;
                    break;
                case 'Análise e Desenvolvimento de Sistemas':
                    conteudoCurso = `
                        <h1>Análise e Desenvolvimento de Sistemas</h1>
                        <p>O curso de Análise e Desenvolvimento de Sistemas prepara profissionais para projetar, implementar e 
                        manter sistemas de informação, utilizando tecnologias e linguagens de programação modernas. O curso também 
                        aborda a análise de requisitos e a gestão de projetos de software.</p>
                    `;
                    break;
                case 'Polímeros':
                    conteudoCurso = `
                        <h1>Polímeros</h1>
                        <p>O curso de Polímeros capacita profissionais para atuar na transformação e processamento de materiais 
                        poliméricos, desenvolvendo novos materiais e produtos plásticos, além de realizar controle de qualidade 
                        e gestão de produção.</p>
                    `;
                    break;
                case 'Projetos Mecânicos':
                    conteudoCurso = `
                        <h1>Projetos Mecânicos</h1>
                        <p>O curso de Projetos Mecânicos forma profissionais aptos a desenvolver, analisar e supervisionar projetos 
                        de sistemas mecânicos, utilizando ferramentas de desenho assistido por computador (CAD) e realizando cálculos 
                        estruturais e térmicos.</p>
                    `;
                    break;
                case 'Gestão Empresarial':
                    conteudoCurso = `
                        <h1>Gestão Empresarial</h1>
                        <p>O curso de Gestão Empresarial prepara profissionais para administrar empresas e negócios, com foco em 
                        planejamento estratégico, finanças, marketing, recursos humanos e operações. O curso também aborda a tomada 
                        de decisões e a liderança organizacional.</p>
                    `;
                    break;
                case 'Logística':
                    conteudoCurso = `
                        <h1>Logística</h1>
                        <p>O curso de Logística capacita profissionais para gerenciar e otimizar processos logísticos, incluindo 
                        armazenamento, distribuição, transporte e gestão de estoques. O curso também aborda a cadeia de suprimentos 
                        e a logística reversa.</p>
                    `;
                    break;
                default:
                    conteudoCurso = "<h1>Curso não encontrado</h1>";
            }

            const novaJanela = window.open('', '', 'width=600,height=300');
            novaJanela.document.write(conteudoCurso);
        }
    }
}