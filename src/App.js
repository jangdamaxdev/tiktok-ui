

import { useState, memo, useEffect, useLayoutEffect, useRef, useCallback, useMemo, useReducer, createContext, useContext } from 'react';
import Sayhello, {contextOBJ} from './Content';
import TodoApp from './TODO/TodoApp';
import Video from './Video';
// useState()
function Radio() {
  const course = [{ id: 1, lang: 'HTML' }, { id: 2, lang: 'CSS' }, { id: 3, lang: 'JS' }]

  const [checked, setChecked] = useState();

  return (
    <div style={{ textAlign: 'left', margin: '10px' }}>
      {course.map(course => (
        <div key={course.id}>
          <input type='radio' id={course.id} onChange={() => setChecked(course.id)} />
          <label htmlFor={course.id}>{course.lang}</label>
        </div>


      ))}

      <button >Submit</button>
    </div>
  );
}
function Checkbox() {
  const course = [{ id: 1, lang: 'HTML' }, { id: 2, lang: 'CSS' }, { id: 3, lang: 'JS' }]

  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter(item => item !== id))
    }
    else {
      // setChecked(checked.concat(id))
      setChecked(pre => [...pre, id])
    }
  }
  console.log(checked)
  return (
    <div style={{ textAlign: 'left', margin: '10px' }}>
      {course.map(course => (
        <div key={course.id}>
          <input type='checkbox' id={course.id} onChange={() => handleCheck(course.id)} />
          <label htmlFor={course.id}>{course.lang}</label>
        </div>
      ))}
      <button >Submit</button>
    </div>
  );
}
function Todolist() {

  const [input, setInput] = useState('');
  const [list, setList] = useState(() => {
    const jsonStore = localStorage.getItem('jobs')
    const initState = JSON.parse(jsonStore)
    return initState ?? []
  });
  const Add = () => {
    if (input !== '') {
      setList(pre => {
        const listStore = [...pre, input]
        localStorage.setItem('jobs', JSON.stringify(listStore))
        return listStore
      })
      setInput('')
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <input value={input} type="text" onInput={(e) => setInput(e.target.value)} />
      <ol>
        {list.map((item, index) => (<li key={index}>{item}</li>))}
      </ol>
      <button onClick={Add}>Add</button>
    </div>
  );
}

// useState() and useEffect
function Settitle() {
  const subjects = ['photos', 'todos', 'users']
  const [api, setApi] = useState([]);
  const [sub, setSub] = useState('posts')
  const [showbtn, setShowbtn] = useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${sub}`)
      .then(res => res.json())
      .then(data => setApi(data))

  }, [sub])
  return (
    <div style={{ textAlign: 'left', margin: '10px' }}>

      {subjects.map(subject => (
        <button key={subject} onClick={() => setSub(subject)}>{subject}</button>
      ))}
      <ol>
        {api.map((item, index) => (
          // gioi han so luong hien thi
          index < 200 &&
          <li key={item.id}>{item.title || item.name}</li>
        )
        )}
      </ol>
      <Gototop />
    </div>
  );
}
function Gototop() {
  const [showbtn, setShowbtn] = useState(false)
  const handleShow = () => setShowbtn(window.scrollY >= 300)
  useEffect(() => {
    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }
    , [])
  return (
    showbtn && <button
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20
      }}
      onClick={(e) => window.scrollTo(window.scrollX, 0)}
    >Go to top</button>)
}

function Widthupdate() {
  const [width, setWidth] = useState('!')
  const winWidth = () => {
    console.log('win');
    setWidth(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener('resize', winWidth)
    return () => window.removeEventListener('resize', winWidth)

  }, [width])
  return (
    <h1>{width}</h1>
  )
}

function Countdown() {
  const [second, setSecond] = useState(180)
  useEffect(() => {
    const intervalID = setInterval(() => {
      setSecond(pre => pre - 1)
    }, 1000)
    return () => clearInterval(intervalID)
  }, [])
  return (
    <h1>{second}</h1>
  )
}

// URL.createObjectURL(file) , URL.revokeObjectURL(avt.preview), e.target.value = null
function Avatar() {
  const [avt, setAvt] = useState()
  const uploadfile = (e) => {
    const file = e.target.files[0]
    if (file) {
      file.preview = URL.createObjectURL(file)
      setAvt(file)
      e.target.value = null
    }
  }
  useEffect(() => {
    return () => {

      avt && URL.revokeObjectURL(avt.preview)
    }
  }, [avt])
  return (
    <div>
      <input
        type='file'

        onChange={uploadfile}
      />
      <br></br>
      {avt ? <img src={avt.preview} alt="" width='50%' /> : <p>Please choice a picture!</p>}



    </div>

  )
}
// Custom Event listener from index.html. Then, add and print result
function Commnent() {
  // open emitComment() in index.js to test
  const contents = ['Kenh chat 1', 'Kenh chat 2', 'Kenh chat 3']
  const [channel, setChannel] = useState(2)
  const handleClick = (pos) => setChannel(pos)
  useEffect(() => {
    if (channel) {
      const handleListener = ({ detail }) => {
        console.log(detail)
      }
      window.addEventListener(`channel-${channel}`, handleListener)
      return () => window.removeEventListener(`channel-${channel}`, handleListener)
    }
  }, [channel])
  return (
    <div>
      <ul>
        {contents.map((content, index) => (
          <li key={index + 1}
            style={{
              color: index + 1 === channel ? 'red' : '#555'
            }}
            onClick={() => handleClick(index + 1)}
          >{content}</li>
        ))}
      </ul>

    </div>
  )
}

// useLayoutEffect (sync) comparison useEffect
function Count() {
  const [count, setcount] = useState(0)
  console.log(`Run function tai ${count}`)
  const handlClick = () => {
    console.log(`Click tai ${count}`)
    setcount(count + 1)
  }
  useLayoutEffect(() => {
    console.log(`Effect Callback tai ${count}`)
    count > 3 && setcount(0)
    return () => console.log(`Cleanup Effect tai ${count}`)
  }, [count])
  console.log(`Render tai ${count}`)
  return (
    <div>
      <h1>{console.log(`Noi dung hien thi tai ${count}`)}{count}</h1>
      <button onClick={handlClick}>Click</button>
    </div>
  )
}

// useRef() and read DOMRect with getBoundingClientRect() 
function StartStop() {
  const [second, setSecond] = useState(1)
  const intervalID = useRef()
  const preSecond = useRef()
  const h1Ref = useRef()
  const start = () => {
    intervalID.current = setInterval(() => {
      setSecond(pre => pre + 1)
    }, 1000)
  }
  const stop = () => {
    clearInterval(intervalID.current)
  }
  useEffect(() => {
    // console.log(`Truoc khi gan ${preSecond.current}`)
    console.log(h1Ref.current.getBoundingClientRect().width);
    preSecond.current = second
    // console.log(`sau khi gan ${preSecond.current} `)
    // return () => console.log(`Gia tri cua 'second' tai return effect la cua phien hoat dong truoc: ${second} `);

  }, [second])
  // console.log(`So truoc ${preSecond.current} va So hien tai ${second}`)


  return (
    <>
      <h1 ref={h1Ref}
        style={{
          width: 300,
          backgroundColor: 'lightblue'
        }}
      >{second}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

// memo() and useCallback
function Memo_UseCallback() {
  const [count, setcount] = useState(0)
  const handlClick = useCallback(() => {
    setcount(pre => pre + 1)
  }, [])
  console.log('render Parent');

  return (
    <div>
      <Sayhello agr={handlClick} />
      {/* <Sayhello /> */}
      <h1>{count}</h1>
      {/* <button onClick={handlClick}>Click</button> */}

    </div>
  )
}

//useMemo and auto focus input
function Bill() {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [bills, setBills] = useState([])
  const itemRef = useRef()
  const handleBuy = () => {
    setBills([...bills, { item: item.toUpperCase(), price: +price }])
    setItem('')
    setPrice('')
    itemRef.current.focus()
  }
  const totalBill = useMemo(() => bills.reduce(
    (sum, row) => sum += row.price
    , 0)
    , [bills])

  return (
    <div>
      <input type="text" value={item} ref={itemRef} onChange={e => setItem(e.target.value)} />
      <br></br>
      <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      <br></br>
      <button onClick={handleBuy}>Buy</button>
      <br></br>
      <h1>Total bill: {totalBill}</h1>
      <ol style={{ textAlign: 'left', fontSize: 30 }}>
        {bills.map((bill, index) => (
          <li key={index}>{bill.item} gia: <span style={{ color: 'red' }} >{bill.price}</span></li>
        ))}
      </ol>
    </div>
  )
}

// useReducer with complex data state and custom callback function

const initData = { id: '1', name: 'Jang', age: '35' }
const callData = (data, action) => {
  console.log('Run callback...')
  // let data = dataF[0]
  if (action === 'printname') {
    return `The name of ID ${data.id}: ${data.name}`
  }
  else if (action === 'printold') {
    return `${data.name} is ${data.age} years old`
  }
  // else return new Error()
}

// createContext and useContext

function Greet() {
  const [user, setAction] = useReducer()
  return (
    <div>
      <h1>{typeof user == 'object' ? 'Click test' : user}</h1>
      {console.log(typeof user)}
      <button onClick={e => setAction('printname')}> Test</button>
    </div>
  )
}
function ControlVideo(){
  const tagVideo = useRef()
  const handlePlay = () => tagVideo.current.hat()
  const handlePause = () => tagVideo.current.dung()
  console.log('controlVideo render');
  

  return(
    <div>
      <Video ref={tagVideo}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button> 
    </div>
  )
}
// MAIN APP
function App() {
  const [show, setShow] = useState(false);
return (
 <div style={{ textAlign: 'center', margin: 5, fontSize: 35 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <ControlVideo />}

    </div>
)
}
export default App