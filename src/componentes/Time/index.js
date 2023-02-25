import Colaborador from '../Colaborador'
import styles from './Time.css'

const Time = (props) => {
    const backgroundTimes = {backgroundColor: props.corSecundaria}
    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={backgroundTimes}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colaboradores'>
                {
                    props.colaboradores.map(colaborador => 
                        <Colaborador 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
                            corDeFundo={props.corPrimaria}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default Time