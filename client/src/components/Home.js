

 export default function Home()
 {
    return(<div>

<div className="block">
          <button className="button  is-danger">Delete</button>
          </div>

          <progress class="progress"  max="100">15%</progress>

          <button className="button block is-primary">Music App</button>
          <p className="block ">It's a mistake to delete this place. Do you still</p>
               <div className="columns block">
                    <div className="column" style={{backgroundColor:'blue'}}>1</div>
                    <div className="column" style={{backgroundColor:'red'}}>2</div>
                    <div className="column" style={{backgroundColor:'yellow'}}>3</div>
                    <div className="column" style={{backgroundColor:'blue'}}>4</div>
               </div>


               <div className="icon-text">
               <span className="icon-text has-text-success">
                    <span className="icon ">
                          <i className="fas fa-check-square"></i>
                    </span>
                    <span>Success</span>
               </span>
               </div>

               <div className="icon-text">
                    <span className="icon has-text-info">
                    <i className="fas fa-info-circle"></i>
                    </span>
                    <span>Information</span>
               </div>
               

               <div className="notification is-info">
  <button className="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
</div>


               <figure className="image is-128x128">
                          <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
               </figure>           

              

    </div>);
 }