import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table_Test extends React.Component {
render() {
    const {characters} = this.props;

    return(
        <div>
            <table>
                <TableHeader/>
                <TableBody characters = {characters} />
            </table>
            <hr/>
            <table>
                <TableHeader/>
                <TableBody characters = {characters}/>
            </table>
        </div>
    );
}
}


const Table = props => {
    const {characters, removeCharacter} = props;

    return (
        <table>
            <TableHeader />
            <TableBody characters = {characters} removeCharacter = {removeCharacter} />
        </table>
    );
}


export default Table;