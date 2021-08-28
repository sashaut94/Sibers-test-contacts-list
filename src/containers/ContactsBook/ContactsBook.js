import React, {useEffect} from 'react'
import classes from './ContactsBook.module.scss'
import {connect} from 'react-redux'
import {fetchContacts} from '../../store/actionCreator'

const ContactsBook = props => {
  const {fetchContacts} = props

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  return <div className={classes.ContactsBook}>
    <h1>
      Книга контактов
    </h1>
  </div>
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook)