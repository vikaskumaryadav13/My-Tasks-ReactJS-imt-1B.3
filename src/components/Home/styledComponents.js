import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const CreateTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  justify-content: flex-start;
  padding: 20px;
  background-color: #131213;
  width: 40%;
  align-items: center;
`

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`

export const FormHeading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #f3aa4e;
`

export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const Label = styled.label`
  font-size: 19px;
  font-weight: 550;
  color: #f8f8f8;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #475569;
  padding-left: 15px;
  outline: none;
`

export const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  outline: none;
  color: #000000;
`

export const OptionInput = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`

export const FormBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  width: 125px;
  background-color: #f3aa4e;
  border: none;
  color: #f1f5f9;
  border-radius: 10px;
`

export const AddTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #000000;
  width: 60%;
  padding: 20px;
`

export const MainHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #f1f5f9;
`

export const TagListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
`

export const TagList = styled.li`
  display: flex;
  margin: 7px;
`

export const TagBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #f1f5f9;
  padding: 9px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
`

export const TaskUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 0px;
`

export const TaskListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #131213;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 13px;
  border-radius: 10px;
`

export const TaskText = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #f1f5f9;
`

export const TaskTag = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #323f4b;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #f3aa4e;
  border: none;
  border-radius: 20px;
`

export const NoTaskText = styled.p`
  align-self: center;
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  color: #f1f5f9;
  margin-top: 151px;
`
