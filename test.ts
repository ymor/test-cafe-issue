import { Selector } from "testcafe";

fixture`Can load page`
  .page`http://localhost:8080`


  test('Can load', async (tc) => {
    await tc.debug();
    await tc.expect(Selector('h1').innerText).eql('Example page');
  
  });