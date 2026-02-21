import os

restaurantes = [{'nome': 'Praça', 'categoria': 'Japonesa', 'ativo': False},
                {'nome': 'Pizza Suprema', 'categoria': 'Italiano', 'ativo': True},
                {'nome': 'Cantina', 'categoria': 'Italiano', 'ativo': False},
                ]

def exibir_nome_do_programa():
    """
    Essa Função é responsável por exibir o nome do programa
    """

    print('''

    ░██████╗░█████╗░██████╗░░█████╗░██████╗░   ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
    ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗   ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
    ╚█████╗░███████║██████╦╝██║░░██║██████╔╝   █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
    ░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗   ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
    ██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║   ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
    ╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝   ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░
    ''')

def exibir_opcoes():
    """ 
    Essa Função é responsável por definir e exibir as opções 
    """

    print('1. Cadastrar restaurante')
    print('2. Listar restaurantes')
    print('3. Alternar estado do restaurante')
    print('4. Sair\n')

def voltar_ao_menu_principal():
    """ 
    Essa Função é responsável por retornar ao menu principal
    """
    
    input('\nDigite uma tecla para voltar ao menu principal ')
    main()

def exibir_subtitulo(texto):
    """
    Essa Função é responsável por exibir o subtitulo

    Argumentos:
    - Texto: Texto que será apresentado
    """
    
    os.system('cls')
    linha = '*' * (len(texto) + 4)
    print(linha)
    print(texto)
    print(linha)
    print()

def cadastrar_novo_restaurante():
    """ 
    Essa Função é responsável por cadastrar um novo restaurante 

    Inputs: 
    - Nome do restaurante
    - Categoria

    Outputs:
    - Adiciona um novo restaurante a lista de restaurantes
    """
    exibir_subtitulo('Cadastro de novos restaurantes')

    nome_do_restaurante = input('Digite o nome do restaurante que deseja cadastrar: ')
    categoria_do_restaurante = input('Digite o nome da categoria do restaurante: ')
    
    dados_do_restaurante = {'nome': nome_do_restaurante,
                            'categoria': categoria_do_restaurante,
                            'ativo': False}
    restaurantes.append(dados_do_restaurante)
    
    print(f'O restaurante: {nome_do_restaurante} foi cadastrado com sucesso')
    
    voltar_ao_menu_principal()

def listar_restaurantes():
    """
    Essa Função é responsável por listar todos os restaurantes

    Outputs:
    - Nome do restaurante
    - Categoria do restaurante
    - Status do restaurante (ativado ou desativado)
    """
    exibir_subtitulo('Listando os restaurantes')

    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | Status')
    for restaurante in restaurantes:
        print(f'- {restaurante['nome'].ljust(20)} | {restaurante['categoria'].ljust(20)} | {'Ativado' if restaurante['ativo'] else 'Desativado'}')

    voltar_ao_menu_principal()

def alternar_estado_restaurante():
    """ 
    Essa Função é responsável por alternar o estado do restaurante

    Inputs:
    - Nome do restaurante

    Outputs:
    - Alteração do status do restaurante de:
        - ativado -> desativado
        - desativado -> ativado
    """
    exibir_subtitulo('Alterando o estado do restaurante')

    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado')

    voltar_ao_menu_principal()

def finalizar_app():
    """
    Essa Função é responsável por finalizar o app
    """
    os.system('cls')
    print('Encerrando o programa\n')

def opcao_invalida():
    """
    Essa Função é responsável por exibir que a opção selecionada é inválida
    """
    print('Opção inválida!')
    voltar_ao_menu_principal()

def escolher_opcao():
    """
    Essa Função é responsável por escolher a opção do cliente

    Inputs:
    - Opção escolhida do app

    Return:
    - Função da opção escolhida
    """
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))
        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()

def main():
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()


if __name__ == '__main__':
    main()