import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io();

function ChatingRoom() {
  return (
    <div>ChatingRoom</div>
  )
}

export default ChatingRoom