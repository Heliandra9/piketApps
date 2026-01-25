import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import TextLink from '@/components/text-link';
import { motion, AnimatePresence } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "@inertiajs/react"

type DialogProps = {
	title: string;
	description: string;
	form?: 'kelas' | 'siswa' | 'guru';
  type?: 'post' | 'put' | 'delete';
  piket?: 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat';
  siswa: [];
  kelas: string;
}

type FormProps = React.ComponentProps<"form"> & {
  onSuccessClose?: () => void;
  piket: string;
  siswa: [];
  kelas: string;
}

export function DialogForm({ type, description, title, form, piket, siswa, kelas }: DialogProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">{title}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] transition-all h-fit">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {form === 'kelas' ? (
            <FormKelas onSuccessClose={() => setOpen(false)} />
          ) : form === 'siswa' && (
            <FormSiswa siswa={siswa} piket={piket} kelas={kelas} onSuccessClose={() => setOpen(false)} />
          )}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">{title}</Button>
      </DrawerTrigger>
      <DrawerContent className="transition-all h-fit">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            {description}
          </DrawerDescription>
        </DrawerHeader>
        {form === 'kelas' ? (
          <FormKelas onSuccessClose={() => setOpen(false)} className="px-4"/>
        ) : form === 'siswa' && (
          <FormSiswa siswa={siswa} piket={piket} onSuccessClose={() => setOpen(false)} className="px-4"/>
        )}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


function FormKelas({ className, onSuccessClose }: FormProps) {
  const { data, setData, post, processing, errors } = useForm({
    nama_kelas: "",
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post("/kelas", {
      onSuccess: () => {
        onSuccessClose?.()
      },
    })
  }

  return (
    <form
      onSubmit={submit}
      className={cn("grid items-start gap-6", className)}
    >
      <div className="grid gap-3">
        <Label htmlFor="kelas">Jurusan</Label>
        <Input
          id="kelas"
          value={data.nama_kelas}
          onChange={(e) => setData("nama_kelas", e.target.value)}
          placeholder="Contoh: X-RPL 1"
        />
        {errors.nama_kelas && (
          <p className="text-sm text-red-500">{errors.nama_kelas}</p>
        )}
      </div>

      <Button type="submit" disabled={processing}>
        {processing ? "Saving..." : "Save changes"}
      </Button>
    </form>
  )
}

function FormSiswa({ className, piket, siswa, kelas }: React.ComponentProps<"form">) {

  const [show, setShow] = React.useState(false)

  const {
    data: dataJadwal,
    setData: setDataJadwal,
    post: postJadwal,
    processing: processingJadwal,
    errors: errorsJadwal,
  } = useForm({
    user_id: "",
    nama_kelas: kelas,
    hari_piket: piket,
  })
  const {
      data: dataSiswa,
      setData: setDataSiswa,
      post: postSiswa,
      processing: processingSiswa,
      errors: errorsSiswa,
    } = useForm({
      name: "",
      username: "",
      password: "",
    })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    show ? 
    postSiswa('/addSiswa', {
      onSuccess: () => {
        onSuccessClose?.()
      },
    }):
    postJadwal('/addJadwal', {
        onSuccess: () => {
          onSuccessClose?.()
        },
      })
    }
    console.log(kelas)
  return (
    <form onSubmit={submit} className={cn("grid items-start gap-6", className)}>
      <AnimatePresence mode="wait">
        {show ? (
          <motion.div
            key="create"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden grid gap-3"
          >
            <div className="text-end text-sm">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="underline"
              >
                {`<`} Kembali
              </button>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input value={dataSiswa.name} onChange={(e)=>setDataSiswa('name', e.target.value)} id="name" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input value={dataSiswa.username} onChange={(e)=>setDataSiswa('username', e.target.value)} id="username" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">password</Label>
              <Input value={dataSiswa.password} onChange={(e)=>setDataSiswa('password', e.target.value)} type="password" id="password" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="select"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden grid gap-3"
          >
            <Label>Nama</Label>
            <Select
              value={dataJadwal.user_id}
              onValueChange={(value) => setDataJadwal("user_id", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Nama" />
              </SelectTrigger>
              <SelectContent>
                {siswa.map((item) => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-center text-sm">
              Tidak menemukan data siswa?{" "}
              <button
                type="button"
                onClick={() => setShow(true)}
                className="underline"
              >
                Buat akun
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        disabled={show ? processingSiswa : processingJadwal}
        type="submit"
      >
        {show
          ? processingSiswa ? "Saving..." : "Save changes"
          : processingJadwal ? "Saving..." : "Save changes"}
      </Button>
    </form>
  )
}
