const BasePage = require('./base.page')

class CatalogPage extends BasePage {
 
get icone_catalog(){
    return $('~View menu')
}
get botao_retornar_catalog(){
   return $('android=new UiSelector().text("Catalog")');

}
// await expect(ProductPage.titulo_produto).toHaveText('Products')


}
module.exports = new CatalogPage()