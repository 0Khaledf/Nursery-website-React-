import React from 'react'
import Nave from './Nave'
import Fot from './Fot'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Nave />
    <Outlet />
    <Fot />
    </>
  )
}