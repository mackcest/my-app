function ComponentCon(props) {
    return(
      <div>
          <button onClick={() => {
              // Chúng ta sẽ gọi props có tên là
              // receiveData đã được truyền từ compoentCha.
              // Và truyền vào đó giá trị cần gửi
              props.onReceiveData('data gửi đi')
          }}>Gửi lại cho componentCha</button>
      </div>
    )
}

export default ComponentCon;