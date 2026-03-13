import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const result = isValidTodo('Boodschappen doen');
    expect(result).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    // TODO: Test of '' invalid is
    const result = isValidTodo('');
    expect(result).toBe(false);
  });

  test('getTodoPriority geeft high voor urgent', () => {
    // TODO: Test of 'urgent bellen' priority 'high' krijgt
    const result = getTodoPriority('urgent bellen');
    expect(result).toBe('high');
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    // TODO: Test of 'koffie drinken' priority 'low' krijgt
    const result = getTodoPriority('koffie drinken');
    expect(result).toBe('low');
  });

});
