import contractRepository from "./infra/InMemoryContractRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import loadContractFromFileSystem from "./infra/FileSystemContractLoader"
import saveContractToFileSystem from "./infra/FileSystemContractSaver"
import loadPlaybookFromFileSystem from "./infra/FileSystemPlaybookLoader"

export const makeContractRepository = () => contractRepository

export const makePlaybookRepository = () => playbookRepository

export const makeLoadContract = () => loadContractFromFileSystem

export const makeSaveContract = () => saveContractToFileSystem

export const makeLoadPlaybook = () => loadPlaybookFromFileSystem
