from modelos.cardapio.item_cardapio import ItemCardapio

class Prato(ItemCardapio):
    def __init__(self, nome, preco, descricao):
        """
        Inicializa uma instância de Prato.

        Parâmetros:
        - nome (str): O nome do prato.
        - preco (str): O preco do prato.
        - descricao (str): A descrição do prato.
        """
        super().__init__(nome, preco)
        self.descricao = descricao

    def __str__(self):
        """
        Retorna uma representação em string do prato.
        """
        return self._nome
    
    def aplicar_desconto(self):
        """
        Método Abstrato da Classe ItemCardapio.

        Aplicar desconto no prato de 5%
        """
        self._preco -= (self._preco * 0.05)