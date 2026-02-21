from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça','Gourmet')
restaurante_praca.receber_avaliacao('Gui',10)
restaurante_praca.receber_avaliacao('Lais',8)
restaurante_praca.receber_avaliacao('Mat',2)
restaurante_pizza = Restaurante('Pizza Express', 'Italiana')
# restaurante_mexicano = Restaurante('Mexican food', 'Mexicana')

# restaurante_mexicano.alternar_estado()

def main():
    Restaurante.listar_restaurantes()


if __name__ == '__main__':
    main()

# print(dir(restaurante_praca))
# print(vars(restaurante_praca))