from abc import ABC, abstractmethod

class ItemCardapio(ABC):
    def __init__(self, nome, preco):
        """
        Inicializa uma instância de ItemCardapio.

        Parâmetros:
        - nome (str): O nome do item.
        - preco (str): O preco do item.
        """
        self._nome = nome
        self._preco = preco

    @abstractmethod
    def aplicar_desconto(self):
        """
        Método Abstrato da Classe ItemCardapio.

        Aplicar desconto nos itens
        """
        pass