param(
  [string]$Message = "Atualiza site Oral Face em $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

$ErrorActionPreference = 'Stop'
$expectedRemote = 'https://github.com/FranciscoNetoLima/oralface.git'
$remote = (git remote get-url origin 2>$null).Trim()
if ($LASTEXITCODE -ne 0 -or $remote -ne $expectedRemote) {
  throw "O remoto origin deve ser $expectedRemote antes de salvar as alteracoes."
}

git add --all
if ($LASTEXITCODE -ne 0) { throw 'Falha ao preparar arquivos para commit.' }

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host 'Nenhuma alteracao pendente para commit.'
  exit 0
}
if ($LASTEXITCODE -ne 1) { throw 'Falha ao verificar alteracoes preparadas.' }

git commit -m $Message
if ($LASTEXITCODE -ne 0) { throw 'Falha ao criar o commit.' }

git push -u origin HEAD
if ($LASTEXITCODE -ne 0) { throw 'O commit local foi criado, mas o envio ao GitHub falhou.' }

Write-Host 'Alteracoes commitadas e enviadas ao GitHub.'
