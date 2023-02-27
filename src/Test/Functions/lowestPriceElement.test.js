import {lowerstPriceElement} from '../../fonctions/fonction_eligibilite'

const tab1 = [
    {
        prix:10,
        index:1
    },
    {
        prix:100,
        index:2
    },
    {
        prix:20,
        index:3
    }]
const tab2 = [{
        prix:80,
        index:1
    },
    {
        prix:100,
        index:2
    },
    {
        prix:20,
        index:3
    }]
const tab3 = [{
        prix:90,
        index:1
    },
    {
        prix:20,
        index:2
    },
    {
        prix:200,
        index:3
    }]

test('lowerstPriceElement', () => {
    expect(lowerstPriceElement(tab1)).toBe(1)
})
test('lowerstPriceElement', () => {
    expect(lowerstPriceElement(tab2)).toBe(3)
})
test('lowerstPriceElement', () => {
    expect(lowerstPriceElement(tab3)).toBe(2)
})
