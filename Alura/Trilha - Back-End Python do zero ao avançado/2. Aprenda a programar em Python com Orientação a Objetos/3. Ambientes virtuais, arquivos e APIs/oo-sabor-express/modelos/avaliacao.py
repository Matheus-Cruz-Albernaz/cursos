class Avaliacao:
    def __init__(self, cliente, nota):
        """
        Inicializa uma instância de Avaliacao.

        Parâmetros:
        - cliente (str): O nome do cliente.
        - nota (int): A avaliação do cliente de 0 a 10.
        """
        self._cliente = cliente
        self._nota = nota