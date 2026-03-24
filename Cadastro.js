document.getElementById("cep").addEventListener("blur", (evento)=> {
     const elemento = evento.target;
     const cepinformado = elemento.value;

     if(!(cepinformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
        .then(response => response.json())
        .then(data => {
        if(!data.erro){
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        }else{
            alert("CEP não encontrado.")






        }
        
    
    
    })
        .catch(error => console.error("Erro ao Buscar o CEP:  ",error));
        
        

})


 document.getElementById("form").addEventListener('submit', (e)=> {
          e.preventDefault();
          
          document.getElementById("cep").addEventListener("blur", (evento)=> {
     const elemento = evento.target;
     const cepinformado = elemento.value;

     if(!(cepinformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
        .then(response => response.json())
        .then(data => {
        if(!data.erro){
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        }else{
            alert("CEP não encontrado.")






        }
        
    
    
    })
        .catch(error => console.error("Erro ao Buscar o CEP:  ",error));
        
        

})


 document.getElementById("form").addEventListener('submit', (e)=> {
          e.preventDefault();
          
          document.getElementById("form").addEventListener('submit', (e)=> {
    e.preventDefault(); // já está certo!

    // Coleta os dados dos campos do formulário
    const endereco = {
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        numero: document.getElementById('numero').value
    };

    // Salva no localStorage
    localStorage.setItem('endereco', JSON.stringify(endereco));
    alert('Endereço salvo com sucesso!');

    // (Opcional) Limpar os campos
    // document.getElementById("form").reset();
});

 });
   
    function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    let lista = document.getElementById('listaTarefas');
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        li.textContent = tarefa;
        lista.appendChild(li);
    });
}

function adicionarTarefa() {
    let input = document.getElementById('tarefaInput');
    let novaTarefa = input.value;
    if (novaTarefa) {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(novaTarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        input.value = '';
        carregarTarefas();
    }
}

// Carrega as tarefas ao iniciar
window.onload = carregarTarefas;


    

 });
   
    function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    let lista = document.getElementById('listaTarefas');
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        li.textContent = tarefa;
        lista.appendChild(li);
    });
}

function adicionarTarefa() {
    let input = document.getElementById('tarefaInput');
    let novaTarefa = input.value;
    if (novaTarefa) {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(novaTarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        input.value = '';
        carregarTarefas();
    }
}

// Carrega as tarefas ao iniciar
window.onload = carregarTarefas;

  const enderecoSalvo = JSON.parse(localStorage.getItem('endereco'));

    if (enderecoSalvo) {
        document.getElementById('cep').value = enderecoSalvo.cep || '';
        document.getElementById('logradouro').value = enderecoSalvo.logradouro || '';
        document.getElementById('bairro').value = enderecoSalvo.bairro || '';
        document.getElementById('cidade').value = enderecoSalvo.cidade || '';
        document.getElementById('estado').value = enderecoSalvo.estado || '';
        document.getElementById('numero').value = enderecoSalvo.numero || '';
    }

    
