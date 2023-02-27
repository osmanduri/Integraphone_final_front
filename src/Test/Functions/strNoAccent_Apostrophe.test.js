import { strNoAccent_Apostrophe } from '../../fonctions/fonction_eligibilite'

const a = "boulevard général leclerc"

const b = "avenue Jean Jaurès"

const c = "Avenue des Champs Elysées"


test('strNoAccent_Apostrophe_Majuscule', () => {
    expect(strNoAccent_Apostrophe(a)).toBe("BOULEVARD GENERAL LECLERC")
})

test('strNoAccent_Apostrophe_Majuscule', () => {
    expect(strNoAccent_Apostrophe(b)).toBe("AVENUE JEAN JAURES")
})

test('strNoAccent_Apostrophe_Majuscule', () => {
    expect(strNoAccent_Apostrophe(c)).toBe("AVENUE DES CHAMPS ELYSEES")
})