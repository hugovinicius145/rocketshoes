import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/72/HZM-1731-172/HZM-1731-172_zoom2.jpg?ts=1582049472&ims=326x" alt="tênis"/>
        <strong>Tênis Muito Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADCIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
