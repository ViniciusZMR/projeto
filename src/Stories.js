import roxo from './resources/roxo.png';

export default function(){
    return(
<div className="stories">
           <div className="storiesCard" style={{backgroundImage:`url(${roxo})`}}>
             <p>Guilherme</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${roxo})`}}>
             <p>José</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${roxo})`}}>
             <p>Fernanda</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${roxo})`}}>
             <p>Pedro</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${roxo})`}}>
             <p>Leticia</p>
           </div>
      </div>
    );
}

