import { Given, When, Then, After } from "@wdio/cucumber-framework"
import ProductPage from "../../pages/products.page"
import ProductDetailPage from "../../pages/product_details.page"
import CartPage from "../../pages/cart.page"
import catalogPage from "../../pages/catalog.page"



Given("que estou na tela de produtos", async () => {
  
    await driver.pause(1000); 
})


When("na {string} do produto seleciono o produto na posição {string}", async (rolagem, index) => {
    await ProductPage.arrastaParaCima(rolagem)
    await ProductPage.clicar_no_produto(index)
})

When("na {string} adiciono mais um produto na posição {string}", async (rolagem, index) => {
    await ProductPage.arrastaParaCima(rolagem)
    await ProductPage.clicar_no_produto(index)
})

When("adiciono o produto no carrinho", async () => {
    await ProductDetailPage.arrastaParaCima(1)
    await ProductDetailPage.botao_adicionar_no_carrinho.click()
})

When("retorno ao catalogo", async () => {
    await catalogPage.icone_catalog.click()
    await catalogPage.botao_retornar_catalog.click()
    await driver.pause(1000); 
})

When("clico no carrinho", async () => {
    await ProductDetailPage.icone_carrinho.click()
})

Then("verifico o {string} e o {string}", async (nome, preco) => {
    await ProductDetailPage.titulo_produto.waitForDisplayed({ timeout: 5000 });
    await expect(ProductDetailPage.titulo_produto).toHaveText(nome)
    await expect(ProductDetailPage.preco_produto).toHaveText(preco)
})

Then("exibe o numero 2 no icone do carrinho", async () => {
    await expect(ProductDetailPage.icone_carrinho).toHaveText('2')
})

Then("verifico o {string} no carrinho", async (precoFinal) => {
    await CartPage.preco_produto.waitForDisplayed({ timeout: 5000 });
    await expect(CartPage.preco_produto).toHaveText(precoFinal)
})