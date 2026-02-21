from modelos.cardapio.item_cardapio import ItemCardapio

class Bebida(ItemCardapio):
    def __init__(self, nome, preco, tamanho):
        """
        Inicializa uma instância de Bebida.

        Parâmetros:
        - nome (str): O nome da bebida.
        - preco (str): O preco da bebida.
        - tamanho (str): O tamanho da bebida.
        """
        super().__init__(nome, preco)
        self.tamanho = tamanho

    def __str__(self):
        """
        Retorna uma representação em string da bebida.
        """
        return self._nome
    
    def aplicar_desconto(self):
        """
        Método Abstrato da Classe ItemCardapio.

        Aplicar desconto na bebida de 8%
        """
        self._preco -= (self._preco * 0.08)