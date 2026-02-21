from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato

restaurante_praca = Restaurante('praça','Gourmet')
bebida_suco = Bebida('Suco de Melancia', 5.0, 'grande')
bebida_suco.aplicar_desconto()
prato_paozinho = Prato('Paozinho', 2.0, 'O melhor pão da cidade')

restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_paozinho)

# restaurante_praca.receber_avaliacao('Gui',10)
# restaurante_praca.receber_avaliacao('Lais',8)
# restaurante_praca.receber_avaliacao('Mat',2)
# restaurante_pizza = Restaurante('Pizza Express', 'Italiana')
# restaurante_mexicano = Restaurante('Mexican food', 'Mexicana')

# restaurante_mexicano.alternar_estado()

def main():
    # Restaurante.listar_restaurantes()
    restaurante_praca.exibir_cardapio


if __name__ == '__main__':
    main()
    print()

# print(dir(restaurante_praca))
# print(vars(restaurante_praca))