from modelos.avaliacao import Avaliacao

class Restaurante:
    """
    Representa um restaurante e suas características.
    """

    restaurantes = []

    def __init__(self, nome, categoria):
        """
        Inicializa uma instância de Restaurante.

        Parâmetros:
        - nome (str): O nome do restaurante.
        - categoria (str): A categoria do restaurante.
        """
        self._nome = nome.title()
        self.categoria = categoria.upper()
        self._avaliacao = []
        self._ativo = False
        Restaurante.restaurantes.append(self)
    
    def __str__(self):
        """
        Retorna uma representação em string do restaurante.
        """
        return f'{self._nome} | {self.categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        """
        Exibe uma lista formatada de todos os restaurantes.
        """
        print(f'{'Nome do restaurante'.ljust(25)} | {'Categoria do restaurante'.ljust(25)} | {'Avaliação'.ljust(25)} | Status do restaurante')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} | {restaurante.categoria.ljust(25)} | {str(restaurante.media_avaliacoes).ljust(25)} | {restaurante.ativo}')

    @property
    def ativo(self):
        """
        Retorna um símbolo indicando o estado de atividade do restaurante.
        """
        return '☒' if self._ativo else '☐'
    
    def alternar_estado(self):
        """
        Alterna o estado de atividade do restaurante.
        """
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente, nota):
        """
        Registra uma avaliação para o restaurante.

        Parâmetros:
        - cliente (str): O nome do cliente que fez a avaliação.
        - nota (float): A nota atribuída ao restaurante.
        """
        avaliacao = Avaliacao(cliente, nota)
        self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        """
        Calcula e retorna a média das avaliações do restaurante.
        """
        if not self._avaliacao:
            return '-'
        soma_das_notas = sum(avalicao._nota for avalicao in self._avaliacao)
        quantidade_de_notas = len(self._avaliacao)
        media = round((soma_das_notas / quantidade_de_notas)/2, 1)
        return media