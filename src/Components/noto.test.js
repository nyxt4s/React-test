import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react'
import Note from './Note';

test ('clicking the button calls events handle once', ()=>{ 
     const note = {
          content: 'this is a test',
          important: true
     }
     
     //mock se hace pasar por algo sin serlo
     //se instancia con jest.fn(); y lo haremos pasar por una funcion, procedemos  renderlizarlo en toggleImportance
     const mockHanlder = jest.fn();
     const component = render(<Note note={note} toggleImportance={mockHanlder} />)
     const button =  component.getByText('make not important') //recupera el elemento que tiene este texto
     fireEvent.click(button) //dispara un evento tipo click y lo hace en el boton
     // component.debug(); //imprime lo que esta renderizando
     
     expect(mockHanlder.mock.calls).toHaveLength(1); //con mock.call sabremos que se ha llamdo y con .toHaveLength la cantidad de veces

     expect(mockHanlder).toHaveBeenCalledTimes(1)  //es la misma funcion que la de arriba pero el llamado es distinto.
})