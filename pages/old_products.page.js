class ProductsPage{
 // Products
    // const lbl_titulo_secao = await driver.$("accessibility id:title")
    // let resultado_atual = await lbl_titulo_secao.getText() // Pega o texto
    // await assert.strictEqual(resultado_atual, "Products")

    // Clicar na Mochila
   // const lbl_clicar_mochila = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(0)"),
    //await lbl_clicar_mochila.click()
    async selecionarProduto(produto){
        //Ler e selecionar todos os cartões do produto
        const cartoes = await $$(
            '-android uiautomator',
            'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV")'
        )

        //Ler cada cartão dentro do conjunto de cartões
        // E selecionar aquele que tiver o nome do produto desejado

        for(let cartao of cartoes){
            //Sobe um nível no elemento(pegue o cartão inteiro)
            let card = await cartao.$('..')

            // Dentro do card, pega o nome do produto
            let nome_produto = await card.$(
                '-android uiautomator',

                `new UiSelector().text("${produto}")`
            )

            let texto_nome_produto = await nome_produto.getText()
            //comprara se é o nome do produto desejado 
            if(texto_nome_produto == produto ){
                await cartao.click() //Se é, clica nele
                return // sai do for após encontrar o produto desejado
            }
        }
    }


}